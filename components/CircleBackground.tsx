export default function CircleBackground() {
  return (
    <div className="pointer-events-none absolute top-[-8rem] left-[-6rem] z-0">
      <div className="w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl" />
    </div>
  );
}