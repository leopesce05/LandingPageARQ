import os

def generar_archivo_js(carpeta, nombre_archivo_js):
    # Lista para almacenar los nombres de los archivos
    nombres_archivos = []

    try:
        # Iterar sobre los archivos en la carpeta
        for archivo in os.listdir(carpeta):
            ruta_completa = os.path.join(carpeta, archivo)
            # Verificar si es un archivo (y no una carpeta)
            if os.path.isfile(ruta_completa):
                nombres_archivos.append(archivo)
    except FileNotFoundError:
        print(f"La carpeta '{carpeta}' no existe.")
        return
    except PermissionError:
        print(f"No tienes permisos para acceder a la carpeta '{carpeta}'.")
        return

    # Crear contenido del archivo .js
    contenido_js = f"// Este archivo fue generado automáticamente\n\n"
    contenido_js += f"export const archivos = {nombres_archivos};\n"

    # Verificar si la carpeta existe, si no, crearla
    carpeta_destino = os.path.dirname(nombre_archivo_js)
    if not os.path.exists(carpeta_destino):
        os.makedirs(carpeta_destino)

    # Guardar contenido en el archivo .js
    try:
        with open(nombre_archivo_js, "w", encoding="utf-8") as archivo_js:
            archivo_js.write(contenido_js)
        print(f"Archivo '{nombre_archivo_js}' generado con éxito.")
    except Exception as e:
        print(f"No se pudo generar el archivo .js: {e}")


# Ruta de la carpeta a listar
ruta_carpeta = 'public/carrousel'
nombre_archivo_js = 'src/fotos.js'

# Generar el archivo .js
generar_archivo_js(ruta_carpeta, nombre_archivo_js)
