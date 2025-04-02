// Annahme: Datalayer Struktur ist nicht bekannt:

class DataLayerCheck {
  
    constructor(datalayer) {
        this.datalayer = datalayer;
        this.missingValues = []
    };

    checkValues(dl = this.datalayer) {
      for (let i in dl) {
        if (dl.hasOwnProperty(i)) {
  
          if (dl[i] === null) {
            console.log(`null value at key ${i}`);
            this.missingValues.push(i);
          } else if (dl[i] === undefined) {
            console.log(`undefined value at key ${i}`);
            this.missingValues.push(i)
          } else if (dl[i] === "") {
            console.log(`empty string at key ${i}`)
            this.missingValues.push(i)
          } else if (typeof dl[i] === 'object') {
            this.checkValues(dl[i]);
          }

        }
      }

    };

    process() {

      this.checkValues();

      console.log(`\nFound ${this.missingValues.length} issues with missing values at keys: \n\t--> ${this.missingValues}`);

    };

};

export { DataLayerCheck };