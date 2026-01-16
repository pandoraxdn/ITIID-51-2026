import type { ReactNode } from "react";

export const Container = ( { children }: { children: ReactNode } ) => {
  return (
    <div
        style={{
            backgroundColor: "pink",
            alignItems: "center",
            justifyContent: "center"
        }}
        className="
            flex
            h-screen
        "
    >
            <div
                className="
                    bg-white
                    p-6
                    rounded-lg
                    shadow
                "
            >
                { children }
            </div>
    </div>
  );
};
