"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  description: string;
  createdAt: string;
  isRead: boolean;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchContacts(token);
  }, [router]);

  const fetchContacts = async (token: string) => {
    try {
      const res = await fetch("/api/contact", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }

      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setLoading(false);
    }
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

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    
    const token = localStorage.getItem("adminToken");
    try {
      await fetch(`/api/contact/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(contacts.filter((c) => c._id !== id));
      setSelectedContact(null);
    } catch (error) {
      console.error("Failed to delete:", error);
    }
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
            <p className="text-3xl font-bold text-[#110B3B]">{contacts.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500">This Month</p>
            <p className="text-3xl font-bold text-[#6450F0]">
              {contacts.filter((c) => new Date(c.createdAt).getMonth() === new Date().getMonth()).length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500">Today</p>
            <p className="text-3xl font-bold text-green-600">
              {contacts.filter((c) => new Date(c.createdAt).toDateString() === new Date().toDateString()).length}
            </p>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-[#110B3B]">Contact Submissions</h2>
          </div>

          {contacts.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              No contact submissions yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="font-medium text-gray-900">{contact.firstName} {contact.lastName}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{contact.phoneNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">{formatDate(contact.createdAt)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="text-[#6450F0] hover:text-[#39208F] font-medium text-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedContact(null)} />
          <div className="relative bg-white rounded-2xl p-6 max-w-lg w-[90%] max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setSelectedContact(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-[#110B3B] mb-4">Contact Form Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-black">{selectedContact.firstName} {selectedContact.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium text-black">{selectedContact.phoneNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Submitted On</p>
                <p className="font-medium text-black">{formatDate(selectedContact.createdAt)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Description</p>
                <p className="mt-1 p-3 bg-gray-50 rounded-lg text-black">{selectedContact.description}</p>
              </div>
              <button
                onClick={() => handleDelete(selectedContact._id)}
                className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
