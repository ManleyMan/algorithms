// RNA to Protein Sequence Translation : "https://www.codewars.com/kata/555a03f259e2d1788c000077/train/javascript"

function protein(rna) {
    let amino = { // Phenylalanine
       'UUC':'F', 'UUU':'F',
       // Leucine
       'UUA':'L', 'UUG':'L', 'CUU':'L', 'CUC':'L','CUA':'L','CUG':'L', 
       // Isoleucine
       'AUU':'I', 'AUC':'I', 'AUA':'I', 
       // Methionine
       'AUG':'M', 
       // Valine
       'GUU':'V', 'GUC':'V', 'GUA':'V', 'GUG':'V', 
       // Serine
       'UCU':'S', 'UCC':'S', 'UCA':'S', 'UCG':'S', 'AGU':'S', 'AGC':'S', 
       // Proline
       'CCU':'P', 'CCC':'P', 'CCA':'P', 'CCG':'P', 
       // Threonine
       'ACU':'T', 'ACC':'T', 'ACA':'T', 'ACG':'T',
       // Alanine
       'GCU':'A', 'GCC':'A', 'GCA':'A', 'GCG':'A', 
       // Tyrosine
       'UAU':'Y', 'UAC':'Y', 
       // Histidine
       'CAU':'H', 'CAC':'H',
       // Glutamine
       'CAA':'Q', 'CAG':'Q', 
       // Asparagine
       'AAU':'N', 'AAC':'N', 
       // Lysine
       'AAA':'K', 'AAG':'K',
       // Aspartic Acid
       'GAU':'D', 'GAC':'D', 
       // Glutamic Acid
       'GAA':'E', 'GAG':'E',
       // Cystine
       'UGU':'C', 'UGC':'C',
       // Tryptophan
       'UGG':'W', 
       // Arginine
       'CGU':'R', 'CGC':'R', 'CGA':'R', 'CGG':'R', 'AGA':'R', 'AGG':'R', 
       // Glycine
       'GGU':'G',  'GGC':'G', 'GGA':'G', 'GGG':'G', 
       // Stop codon
       'UAA':'Stop', 'UGA':'Stop', 'UAG':'Stop',
    }
    let rnaArr =(rna.match(/.{1,3}/g));
     let result = rnaArr.map(protein => {
     if(protein === 'UAA' ||protein === 'UGA' || protein === 'UAG'){                      
       return ''
       }else{
        return amino[protein]
       }
   })
     return result.join('')
   }

   // Tests

Test.assertEquals(protein('AUG'), 'M');
Test.assertEquals(protein('AUGUGA'), 'M');
Test.assertEquals(protein('AUGGUUAGUUGA'), 'MVS');
Test.assertEquals(protein('UGCGAUGAAUGGGCUCGCUCC'), 'CDEWARS')
Test.assertEquals(protein('AUGUCCUUCCAUCAAGGAAACCAUGCGCGUUCAGCUUUCUGA'), 'MSFHQGNHARSAF')
Test.assertEquals(protein('AUGCUUCAAGUGCACUGGAAAAGGAGAGGGAAAACCAGUUGA'), 'MLQVHWKRRGKTS')
Test.assertEquals(protein('AUGGCGUUCAGCUUUCUAUGGAGGGUAGUGUACCCAUGCUGA'), 'MAFSFLWRVVYPC')
Test.assertEquals(protein('AUGCAGCUUUCUAUGGAGGGUAGUGUUAACUACCACGCCUGA'), 'MQLSMEGSVNYHA')
Test.assertEquals(protein('AUGCUAUGGAGGGUAGUGUUAACUACCACGCCCAGUACUUGA'), 'MLWRVVLTTTPST')