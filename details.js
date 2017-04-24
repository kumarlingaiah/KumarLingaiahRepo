var storage=require('node-persist');
storage.initSync();

//storage.setItemSync("accounts",[{username:'Kumar',balance:100},{username:'samrudh',balance:120}])

// var accounts=storage.getItemSync('accounts');
// accounts.push({username:'admin',balance:75});

// storage.setItemSync('accounts',accounts);
// console.log(accounts);
var accounts=storage.getItemSync('accounts');