import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Briefs</h1>
          <Link
            href="/dashboard/new"
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-6 py-3 font-medium transition-colors"
          >
            + Create New Brief
          </Link>
        </div>

        <div className="text-center py-20">
          <p className="text-gray-600 mb-4">
            No briefs yet. Create your first one!
          </p>
          <Link
            href="/dashboard/new"
            className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-6 py-3 font-medium transition-colors"
          >
            Create Brief
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-black rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2"></h3>
            <p className="text-gray-600 mb-4"></p>
            <div className="flex gap-2">
              <button className="flex-1 bg-white border-2 border-black text-black rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
