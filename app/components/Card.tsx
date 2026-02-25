interface CardProps {
  content: string;
}

export default function Card({ content }: CardProps) {
  return (
    <div className="bg-white border-2 border-black rounded-xl p-6">
      <p className="text-gray-800">{content}</p>
    </div>
  );
}
