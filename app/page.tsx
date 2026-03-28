import { MainLayout } from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold font-mono mb-4">
            <span className="text-matrix-green">{'> '}</span>
            Welcome to my Portfolio
          </h1>
          <p className="text-xl text-matrix-green-dim font-mono mb-8">
            Full Stack Developer | Problem Solver | Code Enthusiast
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-matrix">
              View Projects
            </button>
            <button className="btn-matrix">
              Get in Touch
            </button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-matrix-green p-6 text-center hover:shadow-glow transition-all duration-300">
            <h3 className="text-3xl font-bold text-matrix-green mb-2">10+</h3>
            <p className="text-matrix-green-dim">Projects Completed</p>
          </div>
          <div className="border-2 border-matrix-green p-6 text-center hover:shadow-glow transition-all duration-300">
            <h3 className="text-3xl font-bold text-matrix-green mb-2">5+</h3>
            <p className="text-matrix-green-dim">Years Experience</p>
          </div>
          <div className="border-2 border-matrix-green p-6 text-center hover:shadow-glow transition-all duration-300">
            <h3 className="text-3xl font-bold text-matrix-green mb-2">100%</h3>
            <p className="text-matrix-green-dim">Client Satisfaction</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t-2 border-matrix-green pt-12">
          <h2 className="text-3xl font-bold font-mono text-matrix-green mb-4">
            Ready to explore?
          </h2>
          <p className="text-matrix-green-dim mb-6">
            Check out my projects, experience, and skills. Let's create something amazing together.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
