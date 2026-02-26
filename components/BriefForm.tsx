"use client";

import { useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";

type FormData = {
  clientName: string;
  clientEmail: string;
  projectName: string;
  projectType: string;
  goals: string;
  targetAudience: string;
  timeline: string;
  budget: string;
  description: string;
  moodboardFiles: File[];
};

export default function BriefForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    clientName: "",
    clientEmail: "",
    projectName: "",
    projectType: "branding",
    goals: "",
    targetAudience: "",
    timeline: "",
    budget: "",
    description: "",
    moodboardFiles: [],
  });

  const { startUpload } = useUploadThing("imageUploader");

  function updateField(field: keyof FormData, value: any) {
    setFormData({ ...formData, [field]: value });
  }

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Get existing briefs
    const briefs = JSON.parse(localStorage.getItem("briefs") || "[]");

    // Create new brief
    const newBrief = {
      id: Date.now().toString(),
      ...formData,
      moodboardFiles: undefined, // Remove File objects
      moodboardUrls: [], // TODO: handle file uploads later
      status: "completed",
      createdAt: new Date().toISOString(),
    };

    // Save
    briefs.push(newBrief);
    localStorage.setItem("briefs", JSON.stringify(briefs));

    // Redirect
    router.push("/dashboard?success=true");
  } catch (error) {
    console.error("Error creating brief:", error);
    alert("Failed to create brief. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white border-2 border-black rounded-xl p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-1/4 h-2 rounded-full mx-1 ${
                  s <= step ? "bg-[#8B5CF6]" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">Step {step} of 4</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* STEP 1: Client Info */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Client Information</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => updateField("clientName", e.target.value)}
                  placeholder="e.g. Acme Studios"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Email
                </label>
                <input
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => updateField("clientEmail", e.target.value)}
                  placeholder="client@email.com"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => updateField("projectName", e.target.value)}
                  placeholder="e.g. Brand Refresh 2024"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => updateField("projectType", e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors bg-white"
                >
                  <option value="branding">Branding</option>
                  <option value="web">Web Design</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-8 py-3 font-medium transition-colors"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2: Project Goals */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Project Goals</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What do you want to achieve?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={formData.goals}
                  onChange={(e) => updateField("goals", e.target.value)}
                  placeholder="Describe your project goals..."
                  rows={6}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={formData.targetAudience}
                  onChange={(e) =>
                    updateField("targetAudience", e.target.value)
                  }
                  placeholder="e.g. Women 25-40, tech professionals"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-white border-2 border-black text-black rounded-xl px-8 py-3 font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-8 py-3 font-medium transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Timeline & Budget */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Timeline & Budget</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Timeline
                </label>
                <input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) => updateField("timeline", e.target.value)}
                  placeholder="e.g. 2-3 weeks"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  placeholder="e.g. $2,000 - $5,000"
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Any other important details?"
                  rows={4}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-white border-2 border-black text-black rounded-xl px-8 py-3 font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-8 py-3 font-medium transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Moodboard */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Moodboard (Optional)</h2>
              <p className="text-gray-600">
                Upload inspiration images for this project
              </p>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Upload Images (Max 10)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    updateField("moodboardFiles", files.slice(0, 10));
                  }}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#8B5CF6] focus:outline-none transition-colors"
                />
                {formData.moodboardFiles.length > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    {formData.moodboardFiles.length} file(s) selected
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-white border-2 border-black text-black rounded-xl px-8 py-3 font-medium hover:bg-gray-50 transition-colors"
                  disabled={isSubmitting}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-8 py-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Creating..." : "Create Brief"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
