export default function LocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-surface-2 text-surface-2-foreground px-28 h-full pb-10 2xl:h-[92vh]">
      {children}
    </section>
  );
}
