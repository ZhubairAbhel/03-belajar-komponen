// import Profile from "../components/profile";
import { Gallery } from "../components/gallery";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      
      <div className="flex w-full justify-center">
        <h1>Ilmuan yang luar biasa</h1>
      </div>

      <div>
        <Gallery/>
      </div>
    
    </div>
  );
}
