import IconExclamationTriangle from "./Icons/IconExclamationTriangle";
import IconLightning from "./Icons/IconLightning";
import IconSun from "./Icons/IconSun";

export const ChatPlaceholder = () => {
  return (
    <div className="m-5">
      <h3 className="text-center text-4xl font-bold my-8">GPT Podium</h3>
      <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
        
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconSun width={24} height={24} className="mr-3" />Exemplo
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
        </div>
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconLightning width={24} height={24} className="mr-3" />Capacidades
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
        </div>
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconExclamationTriangle width={24} height={24} className="mr-3" />Limitações
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique o sentido da vida em termos simples</div>
        </div>

      </div>
    </div>
  );
}