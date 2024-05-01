import Profile from "./profile";

export function Gallery() {
    return (
        <div className="flex w-full justify-center">
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}