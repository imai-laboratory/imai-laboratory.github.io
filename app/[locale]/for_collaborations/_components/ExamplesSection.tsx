import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

type ExamplesSectionProps = {
  title: string;
  description: string;
};

export function ExamplesSection({ title, description }: ExamplesSectionProps) {
  const examples = description
    .split("\n")
    .filter((line) => line.trim())
    .map((item, index) => {
      const icons = ["🤖", "💬", "📹", "🧠", "📊"];
      return {
        text: item,
        icon: icons[index % icons.length],
        gradient: [
          "from-blue-400 to-cyan-400",
          "from-purple-400 to-pink-400",
          "from-green-400 to-teal-400",
          "from-yellow-400 to-orange-400",
          "from-red-400 to-pink-400",
        ][index % 5],
      };
    });

  return (
    <AnimatedSection className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={title}
          icon="🎯"
          iconBgColor="from-purple-100 to-pink-100"
          lineColor="from-purple-500 to-pink-500"
        />

        {/* Examples Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div
                key={`example-${example.text.slice(0, 20)}-${index}`}
                className="group relative"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up">
                  {/* Glowing border effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${example.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300`}
                  />

                  <div className="relative z-10 flex items-start">
                    <div
                      className={`text-4xl mr-4 p-3 rounded-xl bg-gradient-to-br ${example.gradient} text-white transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {example.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                        {example.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
