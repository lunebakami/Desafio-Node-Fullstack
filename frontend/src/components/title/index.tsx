export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl/[2.5rem] font-semibold text-left">
      {children}
    </h1>
  );
}

export function Title02({children}: {children: React.ReactNode}) {
  return (
    <h2 className="text-2xl/[2.5rem] font-semibold text-left">
      {children}
    </h2>
  )
}
