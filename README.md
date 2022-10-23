1. # Получаем и выводим весь список контактов в виде таблицы (console.table)

   node index.js --action list
   https://monosnap.com/file/CstPZcBe4Vb3OrKWJV6iXMjHVIbRcj

2. # Получаем контакт по id

   node index.js --action get --id 5
   https://monosnap.com/file/YuUWZPDJiyxkkoOJB0D5efH4cwrK92

3. # Добавялем контакт

   node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
   https://monosnap.com/file/3uUQo6kcFYHgZtjFGIIvgv79JtSdcK

4. # Удаляем контакт

   node index.js --action remove --id=3
   https://monosnap.com/file/8JvkCzJC3DOMBhXzgJT18jBoQGYiSe
