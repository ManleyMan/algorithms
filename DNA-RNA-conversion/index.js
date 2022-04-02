 // DNA to RNA Conversion : "https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript "


 DNAtoRNA = (dna) => dna.split("").map(char => ({ T : 'U', G : 'G',C : 'C', A : 'A'})[char]).join("");


 // Tests



    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")

