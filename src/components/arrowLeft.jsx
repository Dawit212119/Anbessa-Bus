import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ArrowLeft() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      className="flex items-center cursor-pointer"
    >
      <ArrowLeftIcon />
    </div>
  );
}
