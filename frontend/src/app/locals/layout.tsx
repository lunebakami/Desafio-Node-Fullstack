export default function LocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-surface-2 text-surface-2-foreground px-28 pb-10">
      {children}
    </section>
  );
}
