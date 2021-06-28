TEST GESTION OPERATIVA BASICO 
LEDESMA MARIA BELEN
1--
EL SCRIPT ESTA PROGRAMADO EN JAVASCRIPT CON AXIOS Y NODEJS,
PARA INSTALAR AXIOS DEBE EJECUTAR EN TERMINAL 
npm install axios

SE EJECUTA POR TERMINAL CON EL COMANDO 
node script.js

SE CREA AUTOMATICAMENTE EL ARCHIVO LOG AL TERMINAR LA EJECUCION CON LOS DATOS PEDIDOS.
ESTA DE FORMA GENERICA PARA EL CASO EN EL QUE SE PREFIERA INGRESAR MAS USERS.

2--
COSTOS POR CADA CARRIER ID 
 

SELECT CO.CarrierID, CO.Zona ,CO.Costo * CA.CantidadDeEnvio as CostosPorCarrier
FROM Cantidaddeenvio CA, Costos CO
WHERE CO.Zona = "AMBA" & CA.Zona = "AMBA"

SELECT CO.CarrierID, CO.Zona ,CO.Costo * CA.CantidadDeEnvio as CostosPorCarrier
FROM Cantidaddeenvio CA, Costos CO
WHERE CO.Zona = "Bs As" & CA.Zona = "Bs As"

SELECT CO.CarrierID, CO.Zona ,CO.Costo * CA.CantidadDeEnvio as CostosPorCarrier
FROM Cantidaddeenvio CA, Costos CO
WHERE CO.Zona = "Resto" & CA.Zona = "Resto"

LA PROPUESTA QUE HARIA SERIA
CarrierID = 1 => TODOS LOS ENVIOS A AMBA =  400 000 
CarrierID = 1 => 33000  ENVIOS AL RESTO = 1 650 000

CarrierID = 2 => TODOS LOS ENVIOS A BS AS=  950 000 
                                          -----------
TOTAL PRESUPUESTO                          3 000 000

QUEDAN PENDIENTES DE ENVIO 27000 PARA ZONA RESTO.


3--
LECTURA Y COMPRENSION SCRIPT BASICO GRAILS
A mi entender se busca obtener los eventos de un servicio de envio.
Al iterarlos imprime la sucursal el dia del evento y la descripcion de cada evento 


SCRIPT BASICO BASH
A mi entender se define una variable con los id de los users,
 al cual se itera con un for en el que se define la variable curl 
 que realiza una peticion a la url escribiendo cookies en el .services y retorna la data de la peticion por usuario



