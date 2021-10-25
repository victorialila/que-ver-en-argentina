# provsTxt=["antartida.html","buenos-aires.html","capital-federal.html","catamarca.html",
# "chaco.html","chubut.html","cordoba.html","corrientes.html","entre-rios.html","formosa.html","jujuy.html","la-pampa.html",
# "la-rioja.html","mendoza.html","misiones.html","neuquen.html","rio-negro.html","salta.html","san-juan.html","san-luis.html",
# "santa-cruz.html","santa-fe.html","santiago-del-estero.html","tierra-del-fuego.html","tucuman.html"]

# crea archivos html

# for i in provsTxt:
#     file = open("L:/PROGRAMACION/Trabajo Práctico Obligatorio/que ver en argentina/copiar-pegar/archivos/" + i , "w")
#     with open("L:/PROGRAMACION/Trabajo Práctico Obligatorio/que ver en argentina/copiar-pegar/esqueleto.txt","r") as archivo:
#         for linea in archivo:
#             print(linea)
#             file.write (linea)
#     file.close()


# crea carpetas

# import os

# provsFolders=["antartida","buenos-aires","capital-federal","catamarca",
# "chaco","chubut","cordoba","corrientes","entre-rios","formosa","jujuy","la-pampa",
# "la-rioja","mendoza","misiones","neuquen","rio-negro","salta","san-juan","san-luis",
# "santa-cruz","santa-fe","santiago-del-estero","tierra-del-fuego","tucuman"]

# for i in provsFolders:
#     # Se define el nombre de la carpeta o directorio a crear
#     directorio = "L:/PROGRAMACION/Trabajo Práctico Obligatorio/que ver en argentina/copiar-pegar/img/" + i
#     try:
#         os.mkdir(directorio)
#     except OSError:
#         print("La creación del directorio %s falló" % directorio)
#     else:
#         print("Se ha creado el directorio: %s " % directorio)