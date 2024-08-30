import Wallet from 'sats-connect';

const response = await Wallet.request('getAccounts', {
    purposes: [AddressPurpose.Payment, AddressPurpose.Ordinals, AddressPurpose.Stacks],
    message: 'Cool app wants to know your addresses!',
  });


  