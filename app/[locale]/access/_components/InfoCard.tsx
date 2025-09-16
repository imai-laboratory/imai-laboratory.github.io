type InfoCardProps = {
  icon: string;
  title: string;
  content: string;
};

export const InfoCard = ({ icon, title, content }: InfoCardProps) => (
  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="text-gray-600 whitespace-pre-line leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  </div>
);
