import { Layout } from "@/components/layout/Sidebar";
import { useAuth } from "@/hooks/use-auth";
import { useUserRole } from "@/hooks/use-roles";
import { useAppointments } from "@/hooks/use-appointments";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, Calendar, Activity, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

export default function Dashboard() {
  const { user } = useAuth();
  const { data: userRole } = useUserRole(user?.id);
  const { data: appointments } = useAppointments();

  const role = userRole?.role || "patient";

  const getStats = () => {
    // These would ideally come from a specific stats API for performance, 
    // but calculating client-side for this MVP
    const totalAppointments = appointments?.length || 0;
    const upcoming = appointments?.filter(a => new Date(a.date) > new Date()).length || 0;
    const completed = appointments?.filter(a => a.status === 'completed').length || 0;
    
    // Role-specific stats
    if (role === 'admin') {
      return [
        { title: "Total Appointments", value: totalAppointments, icon: Calendar, color: "blue" as const },
        { title: "Active Doctors", value: "12", icon: Activity, color: "green" as const },
        { title: "Total Patients", value: "145", icon: Users, color: "amber" as const },
        { title: "Revenue (M)", value: "$45.2k", icon: DollarSign, color: "rose" as const },
      ];
    } 
    
    if (role === 'doctor') {
      return [
        { title: "My Appointments", value: upcoming, icon: Calendar, color: "blue" as const },
        { title: "Patients Today", value: "4", icon: Users, color: "green" as const },
        { title: "Completed", value: completed, icon: Activity, color: "amber" as const },
      ];
    }

    return [
      { title: "Upcoming Visits", value: upcoming, icon: Calendar, color: "blue" as const },
      { title: "Past Visits", value: completed, icon: Activity, color: "green" as const },
    ];
  };

  const stats = getStats();

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Welcome back, {user?.firstName}
          </h1>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with your {role === 'patient' ? 'health' : 'practice'} today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} className="hover:-translate-y-1" />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {appointments && appointments.length > 0 ? (
                <div className="space-y-4">
                  {appointments.slice(0, 5).map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                          {format(new Date(apt.date), 'd')}
                        </div>
                        <div>
                          <p className="font-medium">{apt.reason}</p>
                          <p className="text-sm text-muted-foreground">{format(new Date(apt.date), 'MMM yyyy, h:mm a')}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize 
                        ${apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                          apt.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                        {apt.status}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No recent activity found
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border border-border/50 shadow-sm bg-gradient-to-br from-primary to-blue-600 text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <button className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left transition-colors border border-white/10">
                <Calendar className="h-6 w-6 mb-2" />
                <span className="font-medium">Book Appointment</span>
              </button>
              {role === 'doctor' && (
                 <button className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left transition-colors border border-white/10">
                   <Users className="h-6 w-6 mb-2" />
                   <span className="font-medium">View Patients</span>
                 </button>
              )}
              {role === 'admin' && (
                 <button className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left transition-colors border border-white/10">
                   <Users className="h-6 w-6 mb-2" />
                   <span className="font-medium">Manage Staff</span>
                 </button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
