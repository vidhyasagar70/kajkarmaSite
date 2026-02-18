"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Plus, Pencil, Trash2, X } from "lucide-react";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  description: string;
  createdAt: string;
  isRead: boolean;
}

interface ProfileLead {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

interface Blog {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  featuredImage: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [profileLeads, setProfileLeads] = useState<ProfileLead[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [selectedLead, setSelectedLead] = useState<ProfileLead | null>(null);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    subtitle: "",
    slug: "",
    featuredImage: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    published: true,
  });
  const [blogLoading, setBlogLoading] = useState(false);

  // Pagination State
  const [contactPage, setContactPage] = useState(1);
  const [leadPage, setLeadPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchData(token);
  }, [router]);

  const fetchData = async (token: string) => {
    try {
      const [contactRes, leadRes, blogRes] = await Promise.all([
        fetch("/api/contact", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("/api/profile-lead", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("/api/admin/blogs", {
          headers: { Authorization: `Bearer ${token}` },
        })
      ]);

      if (contactRes.status === 401 || leadRes.status === 401 || blogRes.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }

      const contactData = await contactRes.json();
      const leadData = await leadRes.json();
      const blogData = await blogRes.json();

      setContacts(contactData.contacts || []);
      setProfileLeads(leadData.leads || []);
      setBlogs(blogData.blogs || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Blog management functions
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const openAddBlogModal = () => {
    setEditingBlog(null);
    setBlogFormData({
      title: "",
      subtitle: "",
      slug: "",
      featuredImage: "",
      content: "",
      metaTitle: "",
      metaDescription: "",
      published: true,
    });
    setShowBlogModal(true);
  };

  const openEditBlogModal = (blog: Blog) => {
    setEditingBlog(blog);
    setBlogFormData({
      title: blog.title,
      subtitle: blog.subtitle || "",
      slug: blog.slug,
      featuredImage: blog.featuredImage,
      content: blog.content,
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      published: blog.published,
    });
    setShowBlogModal(true);
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogLoading(true);

    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const url = editingBlog
        ? `/api/admin/blogs/${editingBlog._id}`
        : "/api/admin/blogs";
      const method = editingBlog ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blogFormData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to save blog");
        return;
      }

      alert(editingBlog ? "Blog updated successfully!" : "Blog created successfully!");
      setShowBlogModal(false);
      fetchData(token);
    } catch (error) {
      console.error("Blog submit error:", error);
      alert("Something went wrong");
    } finally {
      setBlogLoading(false);
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        alert("Failed to delete blog");
        return;
      }

      alert("Blog deleted successfully!");
      fetchData(token);
    } catch (error) {
      console.error("Delete blog error:", error);
      alert("Something went wrong");
    }
  };

  // Pagination Logic
  const paginatedContacts = contacts.slice((contactPage - 1) * ITEMS_PER_PAGE, contactPage * ITEMS_PER_PAGE);
  const totalContactPages = Math.ceil(contacts.length / ITEMS_PER_PAGE);

  const paginatedLeads = profileLeads.slice((leadPage - 1) * ITEMS_PER_PAGE, leadPage * ITEMS_PER_PAGE);
  const totalLeadPages = Math.ceil(profileLeads.length / ITEMS_PER_PAGE);

  const totals = {
    total: contacts.length + profileLeads.length,
    thisMonth:
      contacts.filter((c) => new Date(c.createdAt).getMonth() === new Date().getMonth()).length +
      profileLeads.filter((l) => new Date(l.createdAt).getMonth() === new Date().getMonth()).length,
    today:
      contacts.filter((c) => new Date(c.createdAt).toDateString() === new Date().toDateString()).length +
      profileLeads.filter((l) => new Date(l.createdAt).toDateString() === new Date().toDateString()).length,
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#6450F0] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#110B3B]">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500">Total Submissions</p>
            <p className="text-3xl font-bold text-[#110B3B]">{totals.total}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500">This Month</p>
            <p className="text-3xl font-bold text-[#6450F0]">{totals.thisMonth}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-3xl font-bold text-green-600">{totals.today}</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Contact Submissions */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-semibold text-[#110B3B]">Contact Form Submissions</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {contacts.length} Total
              </span>
            </div>

            {contacts.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No contact submissions yet.</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {paginatedContacts.map((contact) => (
                        <tr key={contact._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            {contact.firstName} {contact.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">{contact.phoneNumber}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">{formatDate(contact.createdAt)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button
                              onClick={() => setSelectedContact(contact)}
                              className="text-[#6450F0] hover:text-[#39208F] font-medium text-sm cursor-pointer"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Contact Pagination Controls */}
                {totalContactPages > 1 && (
                  <div className="px-6 py-4 border-t flex items-center justify-between bg-gray-50/30">
                    <p className="text-sm text-gray-600">
                      Page <span className="font-medium">{contactPage}</span> of <span className="font-medium">{totalContactPages}</span>
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setContactPage(prev => Math.max(1, prev - 1))}
                        disabled={contactPage === 1}
                        className="p-2 rounded border bg-white enabled:hover:bg-gray-50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
                        title="Previous"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={() => setContactPage(prev => Math.min(totalContactPages, prev + 1))}
                        disabled={contactPage === totalContactPages}
                        className="p-2 rounded border bg-white enabled:hover:bg-gray-50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
                        title="Next"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Profile Download Leads */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-semibold text-[#110B3B]">Profile Download Leads</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {profileLeads.length} Total
              </span>
            </div>

            {profileLeads.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No profile download leads yet.</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {paginatedLeads.map((lead) => (
                        <tr key={lead._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{lead.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">{lead.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{lead.phoneNumber}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">{formatDate(lead.createdAt)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Lead Pagination Controls */}
                {totalLeadPages > 1 && (
                  <div className="px-6 py-4 border-t flex items-center justify-between bg-gray-50/30">
                    <p className="text-sm text-gray-600">
                      Page <span className="font-medium">{leadPage}</span> of <span className="font-medium">{totalLeadPages}</span>
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setLeadPage(prev => Math.max(1, prev - 1))}
                        disabled={leadPage === 1}
                        className="p-2 rounded border bg-white enabled:hover:bg-gray-50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
                        title="Previous"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={() => setLeadPage(prev => Math.min(totalLeadPages, prev + 1))}
                        disabled={leadPage === totalLeadPages}
                        className="p-2 rounded border bg-white enabled:hover:bg-gray-50 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
                        title="Next"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Blog Management Section */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50/50">
              <h2 className="text-lg font-semibold text-[#110B3B]">Blog Posts</h2>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {blogs.length} Total
                </span>
                <button
                  onClick={openAddBlogModal}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6450F0] to-[#39208F] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Plus className="w-4 h-4" />
                  Add Blog
                </button>
              </div>
            </div>

            {blogs.length === 0 ? (
              <div className="p-12 text-center text-gray-500">No blogs yet. Click "Add Blog" to create your first post.</div>
            ) : (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {blogs.map((blog) => (
                    <div key={blog._id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video relative bg-gray-100">
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{blog.title}</h3>
                        {blog.subtitle && (
                          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{blog.subtitle}</p>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>{formatDate(blog.createdAt)}</span>
                          <span className={`px-2 py-1 rounded ${blog.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                            {blog.published ? 'Published' : 'Draft'}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditBlogModal(blog)}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog._id)}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Contact Detail Modal (Restored original logic) */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedContact(null)} />
          <div className="relative bg-white rounded-2xl p-6 max-w-lg w-[90%] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#110B3B]">Contact Form Details</h3>
              <button onClick={() => setSelectedContact(null)} className="text-gray-400 hover:text-gray-600 cursor-pointer">✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Full Name</p>
                <p className="font-medium text-black bg-gray-50 p-3 rounded-xl border border-gray-100">{selectedContact.firstName} {selectedContact.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                <p className="font-medium text-black bg-gray-50 p-3 rounded-xl border border-gray-100">{selectedContact.phoneNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Submitted On</p>
                <p className="font-medium text-black bg-gray-50 p-3 rounded-xl border border-gray-100">{formatDate(selectedContact.createdAt)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <p className="p-4 bg-gray-50 rounded-xl text-black border border-gray-100 leading-relaxed min-h-[100px]">{selectedContact.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Modal */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowBlogModal(false)} />
          <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#110B3B]">
                {editingBlog ? "Edit Blog" : "Add New Blog"}
              </h3>
              <button
                onClick={() => setShowBlogModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleBlogSubmit} className="p-6 space-y-5">
              {/* Blog Title */}
              <div>
                <label className="block text-sm font-medium text-[#110B3B] mb-1.5">
                  Blog Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={blogFormData.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    setBlogFormData({
                      ...blogFormData,
                      title,
                      slug: blogFormData.slug || generateSlug(title),
                    });
                  }}
                  placeholder="Enter blog title"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6450F0] focus:border-transparent outline-none text-gray-900 bg-white"
                />
              </div>

              {/* Blog Subtitle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Blog Subtitle <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={blogFormData.subtitle}
                  onChange={(e) => setBlogFormData({ ...blogFormData, subtitle: e.target.value })}
                  placeholder="Enter blog subtitle (optional)"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6450F0] focus:border-transparent outline-none text-gray-900 bg-white"
                />
              </div>

              {/* Custom Slug */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Custom Slug <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={blogFormData.slug}
                  onChange={(e) => setBlogFormData({ ...blogFormData, slug: e.target.value })}
                  placeholder="custom-blog-slug (leave empty to auto-generate from title)"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6450F0] focus:border-transparent outline-none text-gray-900 bg-white font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Leave empty to auto-generate from title</p>
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-[#110B3B] mb-1.5">
                  Featured Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={blogFormData.featuredImage}
                  onChange={(e) => setBlogFormData({ ...blogFormData, featuredImage: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6450F0] focus:border-transparent outline-none text-gray-900 bg-white"
                />
              </div>

              {/* Paragraph Content */}
              <div>
                <label className="block text-sm font-medium text-[#110B3B] mb-1.5">
                  Paragraph Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={blogFormData.content}
                  onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                  placeholder="Start writing your blog content..."
                  rows={8}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6450F0] focus:border-transparent outline-none text-gray-900 bg-white resize-y"
                />
              </div>

              {/* Meta Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Meta Title <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={blogFormData.metaTitle}
                  onChange={(e) => setBlogFormData({ ...blogFormData, metaTitle: e.target.value })}
                  placeholder="SEO meta title"
                  maxLength={60}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6450F0] focus:border-transparent outline-none text-gray-900 bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">Recommended: 50-60 characters</p>
              </div>

              {/* Meta Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Meta Description <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <textarea
                  value={blogFormData.metaDescription}
                  onChange={(e) => setBlogFormData({ ...blogFormData, metaDescription: e.target.value })}
                  placeholder="SEO meta description"
                  maxLength={160}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6450F0] focus:border-transparent outline-none text-gray-900 bg-white resize-y"
                />
                <p className="text-xs text-gray-500 mt-1">Recommended: 150-160 characters</p>
              </div>

              {/* Published Toggle */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={blogFormData.published}
                  onChange={(e) => setBlogFormData({ ...blogFormData, published: e.target.checked })}
                  className="w-4 h-4 text-[#6450F0] border-gray-300 rounded focus:ring-[#6450F0]"
                />
                <label htmlFor="published" className="text-sm font-medium text-gray-700">
                  Publish immediately
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowBlogModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={blogLoading}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#6450F0] to-[#39208F] text-white font-medium rounded-lg hover:opacity-90 disabled:opacity-70 transition-opacity"
                >
                  {blogLoading ? "Saving..." : editingBlog ? "Update Blog" : "Create Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
