type Props = {
  title: string;
  children: React.ReactNode;
};

export default function StatCard({ title, children }: Props) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-3">
      </div>
      {children}
    </div>
  );
}