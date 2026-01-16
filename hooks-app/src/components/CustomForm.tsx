import { CustomBtn } from "./CustomBtn";
import { CustomInput } from "./CustomInput";

export const CustomForm = () => {
  return (
    <form
        style={{
            alignItems: "center"
        }}
        className="
            p-6
            max-w-md
            mx-auto
            flex
            flex-col
            gap-4
            bg-white
            rounded-lg
            shadow
        "
    >
        <h1
            style={{
                margin: 5,
                color: "pink",
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold"
            }}
        >
            Iniciar Sesión
        </h1>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElEDv8wUARorTMaUMkBxGlJh9cahKKqThcA&s"
            style={{
                height: 150,
                width: 150,
                alignSelf: "center",
                borderRadius: 100,
                borderColor: "pink",
                borderWidth: 10
            }}
        />
        <CustomInput
            text="Ingresa tu correo"
            color="pink"
            type="email"
        />
        <CustomInput
            text="Ingresa tu contraseña"
            color="pink"
            type="password"
        />
        <CustomInput
            text="Ingresa tu pin"
            color="pink"
            type="number"
        />
        <CustomBtn
            text="Enviar"
            color="violet"
            onPress={ () => console.log("Enviar") }
        />
    </form>
  );
};
