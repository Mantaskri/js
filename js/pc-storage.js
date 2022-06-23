console.clear();


/*
Duota kietojo disko duomenu struktura (folder > file) ir reikia suskaiciuoti, kiek vietos uzima visi failai.

Folder uzima 0 vietos.
*/
const pc = {
    name: 'C',
    type: 'folder',
    content: [
        {
            name: 'Programs Files',
            type: 'folder',
            content: [
                {
                    name: 'Android',
                    type: 'folder',
                    content: []
                },
                {
                    name: 'GIMP 2',
                    type: 'folder',
                    content: [
                        {
                            name: 'dbghelp.dll',
                            type: 'file',
                            size: 1497,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'gimp-2.10.exe',
                            type: 'file',
                            size: 9138,
                            sizeUnits: 'kb'
                        }
                    ]
                },
            ]
        },
        {
            name: 'Windows',
            type: 'folder',
            content: [
                {
                    name: 'DiagTrack',
                    type: 'folder',
                    content: [
                        {
                            name: 'analyticsevents.dat',
                            type: 'file',
                            size: 2,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'utc.allow.diffbase',
                            type: 'file',
                            size: 468,
                            sizeUnits: 'kb'
                        }
                    ]
                }
            ]
        },
        {
            name: 'msdia80.dll',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}

function storage(item, depth = 0) {
    let size = 0;

    if (item.type === 'folder') {
        for (const innerItem of item.content) {
            size += storage(innerItem, depth+1);
        }
    } else {
        size = item.size;
    } 
    return depth ? size : size / 8;
}

const totalKBs = storage(pc);
console.log('Used space:', totalKBs, 'KB');


const fuse = new Fuse(pc, {
    keys: ['name', 'type']
})

fuse.search('msdia')