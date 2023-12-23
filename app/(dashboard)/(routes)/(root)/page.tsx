import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
    // <div className="p-6 space-y-4">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //    <InfoCard
    //       icon={Clock}
    //       label="In Progress"
    //       numberOfItems={coursesInProgress.length}
    //    />
    //    <InfoCard
    //       icon={CheckCircle}
    //       label="Completed"
    //       numberOfItems={completedCourses.length}
    //       variant="success"
    //    />
    //   </div>
    //   <CoursesList
    //     items={[...coursesInProgress, ...completedCourses]}
    //   />
    // </div>
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
      <p className="w-[60%] text-center font-semibold text-2xl">
        Your journey to online education entrepreneurship begins here. The
        Logoipsum Dashboard empowers you to create, market, and sell your
        courses
        <span className="hidden md:block">
          while providing a seamless experience for purchasing courses from
          other talented educators.
        </span>
      </p>
    </div>
  );
}
