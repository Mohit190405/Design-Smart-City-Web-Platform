import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { BookOpen, PlayCircle, Award, Clock } from 'lucide-react';

const enrolledCourses = [
  { id: 1, title: 'Digital Literacy Basics', progress: 75, duration: '4 hours', instructor: 'Sarah Johnson' },
  { id: 2, title: 'Smart City Technology', progress: 45, duration: '6 hours', instructor: 'Mike Davis' },
  { id: 3, title: 'Entrepreneurship 101', progress: 20, duration: '8 hours', instructor: 'Emily Brown' },
];

const availableCourses = [
  { id: 4, title: 'Financial Planning', category: 'Finance', duration: '5 hours', students: 1234 },
  { id: 5, title: 'Sustainable Living', category: 'Environment', duration: '3 hours', students: 892 },
  { id: 6, title: 'Data Privacy & Security', category: 'Technology', duration: '4 hours', students: 2103 },
  { id: 7, title: 'Community Leadership', category: 'Leadership', duration: '6 hours', students: 567 },
];

export default function Learning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Learning Hub</h1>
        <p className="text-[var(--color-neutral-600)]">Continue your education journey</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[var(--color-primary-600)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Enrolled Courses</p>
              <h3 className="text-[var(--color-neutral-900)]">5</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Certificates</p>
              <h3 className="text-[var(--color-neutral-900)]">3</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-[var(--color-secondary-600)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">Hours Learned</p>
              <h3 className="text-[var(--color-neutral-900)]">42</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--color-accent-100)] rounded-xl flex items-center justify-center">
              <PlayCircle className="w-6 h-6 text-[var(--color-accent-600)]" />
            </div>
            <div>
              <p className="text-sm text-[var(--color-neutral-600)]">In Progress</p>
              <h3 className="text-[var(--color-neutral-900)]">3</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Enrolled Courses */}
      <div>
        <h3 className="text-[var(--color-neutral-900)] mb-4">Continue Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id}>
              <div className="mb-4">
                <h4 className="text-[var(--color-neutral-900)] mb-2">{course.title}</h4>
                <p className="text-sm text-[var(--color-neutral-600)] mb-4">
                  by {course.instructor}
                </p>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--color-neutral-600)]">Progress</span>
                    <span className="text-[var(--color-neutral-900)]">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[var(--color-neutral-200)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--color-primary-600)] transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <Button variant="primary" fullWidth>
                <PlayCircle className="w-4 h-4" />
                Continue
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Courses */}
      <div>
        <h3 className="text-[var(--color-neutral-900)] mb-4">Explore Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableCourses.map((course) => (
            <Card key={course.id} hover>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-primary-600)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--color-neutral-900)] mb-1">{course.title}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary" size="sm">{course.category}</Badge>
                    <span className="text-sm text-[var(--color-neutral-500)]">{course.duration}</span>
                  </div>
                  <p className="text-sm text-[var(--color-neutral-600)]">
                    {course.students.toLocaleString()} students enrolled
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Enroll
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
