/* 💡 Skeleton Loader Ringan */
function SectionSkeleton({ title }: { title: string }) {
  return (
    <div className="w-full py-16 flex items-center justify-center animate-pulse">
      <div className="text-gray-400 text-sm">Loading {title}...</div>
    </div>
  );
}
