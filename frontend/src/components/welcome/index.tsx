import { Title } from "../title"

export default function Welcome() {
  return (
    <div className="w-92 lg:w-auto h-32 gap-1 flex items-center mt-12 mb-6">
      <img
        className="w-24"
        src="/welcome-avatar.png"
        alt="Welcome Avatar"
      />
      <div className="text-surface-foreground flex items-start justify-center flex-col">
        <Title>Olá!</Title>
        <h3 className="font-normal text-sm">Confira todos os seus eventos e locais em um só lugar!</h3>
      </div>
    </div>
  );
}
