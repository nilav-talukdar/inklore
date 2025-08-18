import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <Button variant="elevated">I am a button</Button>
      <p className="text-rose-500">Inklore</p>
      <Input
        placeholder="Enter your name"
        type="text"
        className="my-2 max-w-md"
      />
      <Progress value={50} className="my-2" />
      <Textarea className="my-2 max-w-md" placeholder="Enter your bio" />
    </div>
  );
}
