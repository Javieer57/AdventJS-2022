# AdventJS 2022

## Reto 1

Instrucciones:

Este año los elfos han comprado una máquina que envuelve regalos. Pero... ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo _ y para envolver un regalo se coloca el símbolo _ de forma que rodee totalmente al string por todos los lados. Por ejemplo:

    const gifts = ['book', 'game', 'socks']
    const wrapped = wrapping(gifts)
    console.log(wrapped)
    [
      "******\n*book*\n******",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ]

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

Nota:El carácter \n representa un salto de línea.

¡Ojo!Asegúrate que pones el número correcto de \* para envolver completamente el string.

¡Suerte!

## Reto 2

Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

    // 01/06 es el 6 de enero, jueves. Cuenta.
    // 04/01 es el 1 de abril, un viernes. Cuenta.
    // 12/25 es el 25 de diciembre, un domingo. No cuenta.

    countHours(year, holidays) // 2 días -> 4 horas extra en el año

Cosas a tener en cuenta y consejos:

- El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
- Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
- El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.

## Reto 3

Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada renos tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función `distributeGifts(packOfGifts, reindeers)` que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]

    // el pack de regalos pesa 4 + 4 + 4 = 12
    // los renos pueden llevar (2 * 6) + (2 * 6) = 24
    // por lo tanto, Santa Claus puede entregar 2 cajas de regalos

    distributeGifts(packOfGifts, reindeers) // 2

Cosas a tener en cuenta:

- Las cajas de regalos no se pueden dividir.
- Los nombres de los regalos y los renos siempre serán mayores que 0.

## Reto 4

Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ]) // true

En el ejemplo anterior, la caja más pequeña entra en la caja más grande. Por lo tanto, es posible empaquetar todas las cajas en una sola. Ahora veamos un caso que no:

    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ]

    fitsInOneBox(boxes) // false

En el ejemplo anterior, la caja más pequeña entra en la caja del medio, pero la caja del medio no entra en la caja más grande. Por lo tanto, no es posible empaquetar todas las cajas en una sola.

Ten en cuenta que las cajas pueden no venir en orden:

    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ]

    fitsInOneBox(boxes) // true

En el ejemplo anterior, la primer caja cabe en la tercera, y la tercera en la segunda. Por lo tanto, es posible empaquetar todas las cajas en una sola.

Cosas a tener en cuenta:

- Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
- Las cajas pueden venir desordenadas de tamaño.
- Las cajas no son siempre cuadradas, pueden ser rectangulares.

## Reto 5

Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.

Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

    const giftsCities = [12, 3, 11, 5, 7]
    const maxGifts = 20
    const maxCities = 3

    // la suma más alta de regalos a repartir
    // visitando un máximo de 3 ciudades
    // es de 20: [12, 3, 5]

    // la suma más alta sería [12, 7, 11]
    // pero excede el límite de 20 regalos y tendría
    // que dejar alguna ciudad a medias.

    getMaxGifts(giftsCities, maxGifts, maxCities) // 20

Si no se puede realizar ningún viaje que satisface los requerimientos, el resultado debe ser 0. Más ejemplos:

    getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
    getMaxGifts([50], 15, 1) // 0
    getMaxGifts([50], 100, 1) // 50
    getMaxGifts([50, 70], 100, 1) // 70
    getMaxGifts([50, 70, 30], 100, 2) // 100
    getMaxGifts([50, 70, 30], 100, 3) // 100
    getMaxGifts([50, 70, 30], 100, 4) // 100

A tener en cuenta:

- maxGifts >= 1
- giftsCities.length >= 1
- maxCities >= 1
- El número de maxCities puede ser mayor a giftsCities.length

## Reto 7

En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.

Por ejemplo, si tenemos los siguientes almacenes:

    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']

    /* El almacén a1 tiene "bici" y "coche".
    El almacén a2 tiene "coche", "bici" y "muñeca".
    El almacén a3 tiene "bici" y "pc".

    El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
    */

    const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

Como ves, los almacenes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.

📝 Summary

1. Crea una función getGiftsToRefill que reciba tres Array como parámetros.
2. La función debe devolver un Array con los regalos que hay que reponer.
3. Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
4. Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
5. Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.
