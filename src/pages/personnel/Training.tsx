import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { BookOpen, Award, PlayCircle, CheckCircle } from 'lucide-react';

const requiredTraining = [
  { id: 1, title: 'Safety Protocols & Guidelines', progress: 100, status: 'completed', certification: true },
  { id: 2, title: 'Customer Service Excellence', progress: 75, status: 'in-progress', certification: true },
  { id: 3, title: 'Equipment Operation Basics', progress: 0, status: 'not-started', certification: true },
];

const optionalCourses = [
  { id: 4, title: 'Advanced Technical Skills', category: 'Technical', duration: '6 hours', enrolled: false },
  { id: 5, title: 'Leadership Development', category: 'Management', duration: '4 hours', enrolled: false },
  { id: 6, title: 'Emergency Response Training', category: 'Safety', duration: '3 hours', enrolled: true },
  { id: 7, title: 'Digital Tools Mastery', category: 'Technology', duration: '5 hours', enrolled: false },
];

const certifications = [
  { id: 1, title: 'Safety Certification Level 1', issueDate: '2024-01-15', expiryDate: '2025-01-15', status: 'active' },
  { id: 2, title: 'Customer Service Professional', issueDate: '2024-03-20', expiryDate: '2026-03-20', status: 'active' },
];

export default function Training() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[var(--color-neutral-900)] mb-2">Training & Skills</h1>
        <p className="text-[var(--color-neutral-600)]">Develop your skills and earn certifications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-[var(--color-primary-600)]" />
            </div>
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Courses Completed</p>
            <h3 className="text-[var(--color-neutral-900)]">8</h3>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Certifications</p>
            <h3 className="text-green-600">2</h3>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-xl flex items-center justify-center mx-auto mb-2">
              <PlayCircle className="w-6 h-6 text-[var(--color-secondary-600)]" />
            </div>
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">In Progress</p>
            <h3 className="text-[var(--color-neutral-900)]">3</h3>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-[var(--color-accent-100)] rounded-xl flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-6 h-6 text-[var(--color-accent-600)]" />
            </div>
            <p className="text-sm text-[var(--color-neutral-600)] mb-1">Completion Rate</p>
            <h3 className="text-[var(--color-neutral-900)]">92%</h3>
          </div>
        </Card>
      </div>

      {/* Required Training */}
      <div>
        <h3 className="text-[var(--color-neutral-900)] mb-4">Required Training</h3>
        <div className="space-y-4">
          {requiredTraining.map((course) => (
            <Card key={course.id}>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-[var(--color-neutral-900)]">{course.title}</h4>
                    {course.certification && (
                      <Badge variant="primary" size="sm">Certification Required</Badge>
                    )}
                    <Badge
                      variant={course.status === 'completed' ? 'success' : course.status === 'in-progress' ? 'warning' : 'neutral'}
                      size="sm"
                    >
                      {course.status}
                    </Badge>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--color-neutral-600)]">Progress</span>
                      <span className="text-[var(--color-neutral-900)]">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-[var(--color-neutral-200)] rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          course.status === 'completed' ? 'bg-green-600' : 'bg-[var(--color-primary-600)]'
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <Button
                  variant={course.status === 'completed' ? 'ghost' : 'primary'}
                  size="sm"
                >
                  {course.status === 'completed' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Review
                    </>
                  ) : (
                    <>
                      <PlayCircle className="w-4 h-4" />
                      {course.status === 'in-progress' ? 'Continue' : 'Start'}
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Optional Courses */}
      <div>
        <h3 className="text-[var(--color-neutral-900)] mb-4">Optional Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {optionalCourses.map((course) => (
            <Card key={course.id} hover>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-primary-600)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--color-neutral-900)] mb-1">{course.title}</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="primary" size="sm">{course.category}</Badge>
                    <span className="text-sm text-[var(--color-neutral-500)]">{course.duration}</span>
                  </div>
                  <Button
                    variant={course.enrolled ? 'ghost' : 'primary'}
                    size="sm"
                    fullWidth
                  >
                    {course.enrolled ? 'Continue' : 'Enroll'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>My Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between p-4 bg-[var(--color-neutral-50)] rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-neutral-900)] mb-1">{cert.title}</h4>
                    <p className="text-sm text-[var(--color-neutral-600)]">
                      Issued: {cert.issueDate} • Expires: {cert.expiryDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm">{cert.status}</Badge>
                  <Button variant="ghost" size="sm">Download</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
