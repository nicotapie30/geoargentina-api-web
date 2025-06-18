import { toast } from "sonner";
import copy from "clipboard-copy";
import CopyIcon from "@icons/CopyIcon";

export function CopyButton({ text }) {
  const handleCopy = () => {
    copy(text);
    toast.success("URL copiada con éxito!");
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className="group w-7 h-7 bg-slate-800 hover:bg-slate-800/80  flex items-center justify-center cursor-pointer rounded-sm transition-all"
        title="Copiar"
        aria-label="Copiar URL"
        style={{ margin: "0 1rem 0 0.5rem" }}
      >
        <CopyIcon />
      </button>
    </div>
  );
}
