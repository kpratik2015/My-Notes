/**
Given an array with two entries, parent and child relation, convert the array to relation tree object (parent -> child -> grandchild)

Input:
[
  ["lion", "cat"],
  ["cat", "mammal"],
  ["dog", "mammal"],
  ["mammal", "animal"],
  ["fish", "animal"],
  ["shark", "fish"],
];

Output:
//animal -> mammal -> cat -> lion
//animal -> mammal -> dog
//animal -> fish -> shark

[
    {
        value: "animal",
        type: 'parent',
        children: [
            {
                value: 'fish',
                type: 'child',
                children: [ ... ]
            }
        ]
    }
]

*/

const entityCreator = (value, type) => ({ children: [], type, value });

const makeEntities = (arr) => {
    const entities = {};
    
    for(const e of arr) {
        const [child, parent] = e;

        if(entities[parent]) {
            // entity parent exists
            const newChild = entities[child] ?? entityCreator(child, 'child');
            // don't mark parent as parent because it can still be a child to another parent
            newChild.type = "child";
            
            entities[parent].children.push(newChild);
            entities[child] = newChild;
        } else {
            // parent does not exist
            const newParent = entityCreator(parent, 'parent');
            const newChild = entities[child] ?? entityCreator(child, 'child');
            
            newChild.type = "child";
            
            newParent.children.push(newChild);
            
            entities[parent] = newParent;
            entities[child] = newChild;
        }
        
    }

    return Object.keys(entities).reduce((a, b) => {
        if(entities[b].type === 'parent') {
            a.push(entities[b]);
        }
         return a;   
    },[])
}

/** Test */

makeEntities([
    ["lion", "cat"],
    ["cat", "mammal"],
    ["dog", "mammal"],
    ["fish", "animal"],
    ["shark", "fish"],
    ["mammal", "animal"],
    ["flying", "bird"],
    ["non-flying", "bird"],
    ["ostrich", "non-flying"],
    ["eagle", "flying"],
])