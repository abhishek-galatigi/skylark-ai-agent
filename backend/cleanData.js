function cleanBoardData(items) {
    return items.map(item => {

        let obj = {
            name: item.name
        };

        item.column_values.forEach(col => {

            let key = col.column.title;

            let value = col.text;

            if (!value || value.trim() === "") {
                value = "Unknown";
            }

            obj[key] = value.trim();
        });

        return obj;

    });
}

module.exports = cleanBoardData;