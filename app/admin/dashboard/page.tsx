"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [profileLeads, setProfileLeads] = useState<ProfileLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [selectedLead, setSelectedLead] = useState<ProfileLead | null>(null);

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
      const [contactRes, leadRes] = await Promise.all([
        fetch("/api/contact", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("/api/profile-lead", {
          headers: { Authorization: `Bearer ${token}` },
        })
      ]);

      if (contactRes.status === 401 || leadRes.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }

      const contactData = await contactRes.json();
      const leadData = await leadRes.json();

      setContacts(contactData.contacts || []);
      setProfileLeads(leadData.leads || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase text-right">Action</th>
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
    </div>
  );
}
