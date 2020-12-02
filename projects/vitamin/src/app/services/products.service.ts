import {Injectable} from '@angular/core';
import {Product} from '../Models/product';
import {EMPTY, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {

  }

  getProducts(): Observable<Product[]> {
    return of(MOCK_PRODUCTS);
  }

  getProduct(id: string): Observable<Product> | Observable<never> {
    const foundProduct = MOCK_PRODUCTS.find(product => {
      return product.id === id;
    });
    if (foundProduct) {
      return of(foundProduct);
    }
    else {
      return EMPTY;
    }
  }

  // for dev and example - not production
  getRandomProduct(): Product[] {
    return [MOCK_PRODUCTS[5], MOCK_PRODUCTS[6]];
  }

  getProductSuggestions(): Product[] {
    return [MOCK_PRODUCTS[7], MOCK_PRODUCTS[8], MOCK_PRODUCTS[9]];
  }

}

const MOCK_PRODUCTS: Product[] = JSON.parse(`[
  {
    "id": "5fc6687ef70885090806d22c",
    "name": "nostrud",
    "description": "Velit aliquip aute laborum eu proident ea. Dolore irure nisi dolor sunt. Minim voluptate tempor deserunt aliqua dolore commodo nisi sit. Qui irure non culpa amet ullamco reprehenderit proident. Consequat commodo eu ipsum enim deserunt ipsum eu. Eu laboris voluptate consectetur non tempor nulla velit velit ut reprehenderit mollit do."
  },
  {
    "id": "5fc6687e1bf52c5b7537f03c",
    "name": "deserunt",
    "description": "Velit commodo aliquip non sint nostrud veniam tempor elit ex ullamco eiusmod excepteur est. Amet id fugiat fugiat eu duis dolor nisi minim minim aliqua veniam minim laboris. Labore ex aliqua consequat Lorem dolore sint et aute reprehenderit reprehenderit voluptate deserunt ea. Magna laborum ullamco id reprehenderit Lorem ipsum adipisicing magna velit incididunt mollit commodo. Cupidatat incididunt aute occaecat laborum cillum. Anim deserunt cillum enim ullamco eu tempor quis ut adipisicing minim. Fugiat exercitation aute esse ipsum pariatur."
  },
  {
    "id": "5fc6687ecb5a44a7a75d0f84",
    "name": "laborum",
    "description": "Non proident in pariatur nostrud. Qui et ex veniam ad sit Lorem id est. Est occaecat ipsum id proident laborum. Esse Lorem in sunt aliqua officia quis ex aliquip sint esse sunt amet mollit nisi. Do velit ea tempor cillum cupidatat incididunt ad est duis ullamco. Enim laborum culpa occaecat cupidatat. Ut adipisicing aliquip non eu et qui exercitation."
  },
  {
    "id": "5fc6687e75a1947a84bdefa4",
    "name": "voluptate",
    "description": "In qui esse culpa reprehenderit Lorem. Officia reprehenderit pariatur incididunt ad amet laborum ut labore mollit exercitation. In ullamco sit culpa minim excepteur enim anim pariatur sint."
  },
  {
    "id": "5fc6687e1a230c1ce49bb468",
    "name": "est",
    "description": "Consequat id non adipisicing ea est Lorem adipisicing culpa fugiat velit cillum. Cillum incididunt duis ullamco sunt incididunt ullamco non. Eiusmod ea enim voluptate in minim nulla ipsum magna ex sit et cupidatat magna Lorem. Excepteur exercitation occaecat adipisicing et sint consequat laboris est ut eu consequat."
  },
  {
    "id": "5fc6687eeb6e4f5fa812aceb",
    "name": "reprehenderit",
    "description": "Aliquip est ad sit ad aute aute proident reprehenderit. Esse duis est sunt nulla nostrud excepteur excepteur Lorem deserunt ipsum. Exercitation qui ullamco culpa do commodo et culpa magna fugiat. Consectetur reprehenderit non voluptate tempor occaecat anim ea nulla ipsum qui Lorem eiusmod mollit consectetur. Ullamco mollit adipisicing nisi irure duis adipisicing amet et magna. Dolore ex pariatur consequat sit exercitation est pariatur ullamco nostrud sunt."
  },
  {
    "id": "5fc6687ea938174e063f9f57",
    "name": "sint",
    "description": "Incididunt eu adipisicing sint elit reprehenderit cupidatat nostrud elit mollit eiusmod. Laborum Lorem amet nostrud sit proident sint. Minim ullamco consequat labore officia nisi duis cillum magna adipisicing exercitation consectetur culpa id aliqua. Minim in do laboris duis anim."
  },
  {
    "id": "5fc6687e723918f0c01e1fcf",
    "name": "eiusmod",
    "description": "Duis occaecat consectetur ipsum reprehenderit quis veniam ea incididunt mollit. Voluptate reprehenderit minim officia elit commodo. Excepteur anim minim proident exercitation ex ea aute adipisicing dolor sint tempor. Irure quis est culpa et. Exercitation ad amet duis id enim labore voluptate aliquip eiusmod enim aliquip. Occaecat mollit ad enim dolore mollit nulla commodo pariatur cillum qui ex mollit dolor mollit. Pariatur ipsum mollit pariatur sint tempor irure velit anim ipsum mollit sit laborum reprehenderit."
  },
  {
    "id": "5fc6687e3bee7d303e5304e1",
    "name": "consequat",
    "description": "Sint commodo magna ullamco incididunt. Ullamco mollit minim proident reprehenderit esse dolore proident adipisicing. Ad in ullamco magna deserunt anim aliqua aliqua enim exercitation officia ea non qui. Laborum non id velit ad commodo non ipsum dolor excepteur qui dolore fugiat."
  },
  {
    "id": "5fc6687e4a057dd810ca8681",
    "name": "voluptate",
    "description": "Proident deserunt enim cupidatat officia cupidatat qui anim sit. Anim amet ad tempor dolor quis sit sint quis Lorem eiusmod voluptate veniam ex. Eiusmod laboris deserunt consequat voluptate consectetur labore sint do id anim ipsum labore. Lorem officia esse enim reprehenderit et pariatur deserunt sunt nostrud Lorem culpa enim excepteur eu. Commodo quis et laboris do incididunt incididunt pariatur culpa nisi. Excepteur ex cupidatat non ad tempor aute ad laboris nulla est consectetur occaecat. Et sunt est fugiat sit labore fugiat eiusmod duis non esse sit voluptate."
  },
  {
    "id": "5fc6687e1ab5e8b4ff4c66d1",
    "name": "sit",
    "description": "Magna duis quis excepteur non aliquip elit sint sunt officia reprehenderit dolor enim irure nisi. Enim consequat ea esse enim non. Consequat sit ipsum minim commodo sit eu deserunt do elit nulla sint mollit."
  },
  {
    "id": "5fc6687ecabfba36cf462b4b",
    "name": "qui",
    "description": "Ex dolor consequat laboris et dolore non duis. Et non do est id dolore commodo irure labore do incididunt. Cillum excepteur voluptate elit irure elit velit. Exercitation occaecat veniam ut commodo commodo dolore culpa. Ipsum anim esse culpa culpa non voluptate. Quis officia magna commodo est amet deserunt anim. Aliquip fugiat in est culpa commodo eu."
  },
  {
    "id": "5fc6687e654cea6b16888a4d",
    "name": "ad",
    "description": "Elit eu magna proident esse ullamco proident est magna enim commodo. Ex cillum tempor amet nostrud. Eu do velit do Lorem Lorem pariatur. Reprehenderit ea qui dolor officia laboris in consectetur. Ad magna laboris aliquip ut."
  },
  {
    "id": "5fc6687e00e8cd2ab5c3e459",
    "name": "deserunt",
    "description": "Cillum velit labore nostrud officia ut do officia aliqua. Et ipsum laboris dolor dolore consequat proident ipsum non ex ut fugiat sunt. Tempor dolor nisi laborum eu consectetur. Culpa labore qui aliqua Lorem minim consectetur enim dolor amet est est velit consequat. Dolor labore mollit enim aliqua eu dolore anim sint. Non sint elit dolore deserunt fugiat excepteur ipsum in do id nisi deserunt. Aliquip pariatur ipsum aliqua cupidatat eu occaecat eu laboris occaecat anim exercitation."
  },
  {
    "id": "5fc6687ea211a8fec5e8f64e",
    "name": "nostrud",
    "description": "Irure cillum commodo aliquip commodo ullamco aliquip. Non eu eu labore ut. Ut officia minim esse Lorem aliqua ex ullamco laborum. Do proident velit nostrud duis aute ex duis dolore voluptate excepteur. Velit qui et occaecat irure veniam dolor officia. Elit ea velit proident proident enim tempor. Laboris quis ullamco dolore consequat mollit irure anim fugiat."
  },
  {
    "id": "5fc6687e4c3bc394353f773f",
    "name": "ullamco",
    "description": "Tempor nulla nulla adipisicing aliquip proident ex sunt excepteur culpa aliqua commodo. Sint irure dolor tempor occaecat do adipisicing ad cillum deserunt adipisicing cillum. Fugiat irure dolor commodo ut culpa. Cupidatat fugiat occaecat ullamco ullamco dolore ad dolor ullamco officia ipsum excepteur. Laboris Lorem ea officia fugiat est. Enim irure laborum in pariatur voluptate exercitation excepteur duis."
  },
  {
    "id": "5fc6687e94cdca8aa12dce1f",
    "name": "mollit",
    "description": "Tempor in qui magna excepteur mollit aliqua est culpa deserunt laboris reprehenderit sint ad. Enim sit consequat et fugiat occaecat magna ipsum quis proident irure sunt ullamco aliquip culpa. Adipisicing eu laborum eiusmod duis. Aliqua do deserunt ullamco voluptate."
  },
  {
    "id": "5fc6687e719719dceef422cd",
    "name": "deserunt",
    "description": "Ullamco quis velit esse sunt. Et ad cillum eu aliquip sunt esse sunt ad incididunt consectetur reprehenderit laborum. Occaecat anim veniam consequat labore minim reprehenderit aute do cupidatat eiusmod. Elit tempor fugiat ex et nisi."
  },
  {
    "id": "5fc6687ed1e5b361865c01e4",
    "name": "veniam",
    "description": "Quis esse consectetur proident dolore. Excepteur ullamco cillum cillum nisi sunt eiusmod laboris culpa magna ipsum id dolor. Et ipsum sunt exercitation deserunt eu pariatur incididunt elit proident."
  },
  {
    "id": "5fc6687edb926429678d846b",
    "name": "ex",
    "description": "Ipsum sunt id in excepteur velit id anim ex occaecat. Officia aute excepteur consectetur quis tempor minim reprehenderit culpa. Aliqua quis eu reprehenderit sit cupidatat nostrud incididunt laborum culpa Lorem. Non labore labore laboris ad esse aliquip ex et duis in laboris. Minim magna voluptate qui pariatur eiusmod."
  },
  {
    "id": "5fc6687e73552e5ef42aff63",
    "name": "nulla",
    "description": "Magna enim ipsum consectetur commodo quis officia laboris exercitation tempor amet non eiusmod amet. Labore et consectetur tempor ea sit tempor duis ea. Deserunt officia irure culpa nostrud cupidatat voluptate. Occaecat est non ad eiusmod mollit. Laboris eu incididunt irure veniam mollit adipisicing esse do."
  },
  {
    "id": "5fc6687eabc391b479292cec",
    "name": "proident",
    "description": "Ut aliqua deserunt anim mollit Lorem ullamco tempor fugiat amet. Excepteur incididunt anim deserunt ea proident ut commodo culpa duis irure reprehenderit officia ullamco et. Esse amet irure voluptate consectetur laboris nisi quis. Quis laboris nisi incididunt mollit velit qui reprehenderit ea aliqua commodo. Incididunt duis esse aute veniam officia sint ut fugiat mollit voluptate. Sit quis excepteur irure elit culpa aliqua excepteur est Lorem nostrud minim mollit. Incididunt voluptate ut quis amet mollit eu incididunt aliqua in occaecat."
  },
  {
    "id": "5fc6687e7d0d6194c21f9477",
    "name": "exercitation",
    "description": "Consectetur aliqua deserunt dolor esse consectetur deserunt ad. Consectetur Lorem consequat reprehenderit minim culpa aute. Est nulla magna aliqua ullamco sit aliquip. Incididunt dolor qui eu dolore veniam Lorem id Lorem commodo excepteur veniam occaecat aliqua. Duis incididunt tempor cillum esse elit dolor excepteur anim ut magna minim velit. Laborum elit minim eu consectetur eu mollit ullamco commodo id enim ad nostrud in."
  },
  {
    "id": "5fc6687ecf8c550159078702",
    "name": "amet",
    "description": "Ex reprehenderit sunt exercitation magna ad aliquip mollit esse adipisicing consectetur irure. Eu magna labore ex cillum fugiat Lorem ipsum sit irure tempor magna duis pariatur occaecat. Proident amet esse do labore ipsum id. Aliqua nostrud quis ad est ad deserunt veniam nostrud."
  },
  {
    "id": "5fc6687e44208f16db24c44d",
    "name": "id",
    "description": "Nisi consectetur ut nulla ullamco ullamco ea ex labore Lorem deserunt reprehenderit laborum consectetur do. Anim occaecat mollit officia occaecat proident eiusmod est pariatur magna. Amet consectetur id et proident id commodo quis. Ad aliqua officia nostrud aliquip deserunt et officia aliqua velit ad in irure mollit."
  },
  {
    "id": "5fc6687e44a67b42fc899e52",
    "name": "dolore",
    "description": "Elit voluptate est incididunt aliquip dolore ut velit et do laborum cillum labore. Eu fugiat et reprehenderit laboris. Magna officia qui magna tempor mollit exercitation Lorem sunt ullamco. Ut aliqua duis duis excepteur duis."
  },
  {
    "id": "5fc6687e0908212ac17df3b1",
    "name": "tempor",
    "description": "Commodo cillum nulla elit enim. Incididunt eiusmod esse Lorem excepteur nostrud tempor aute sint cillum id nulla sunt incididunt sit. Fugiat minim laborum qui pariatur pariatur duis laborum sint. Culpa est consectetur irure amet deserunt esse cupidatat consequat incididunt sit enim excepteur consequat cupidatat. Dolor officia consectetur ut tempor qui. Occaecat velit exercitation eiusmod nulla velit ex cillum sint ipsum. Irure excepteur ea deserunt culpa aute enim irure qui anim anim proident."
  },
  {
    "id": "5fc6687e9d6481685458e876",
    "name": "magna",
    "description": "Incididunt laborum commodo reprehenderit occaecat ullamco labore reprehenderit. Ipsum dolor Lorem velit cillum dolor aute excepteur amet minim consequat dolore. Enim velit quis consequat commodo tempor cupidatat id. Qui officia Lorem laboris id."
  },
  {
    "id": "5fc6687e8e14209517e80c06",
    "name": "velit",
    "description": "Reprehenderit anim occaecat aliquip adipisicing deserunt in ullamco consectetur et ut ea. Amet nulla nisi laborum commodo culpa officia sint. Quis et incididunt magna officia mollit aliquip non do incididunt. Do laboris laborum incididunt velit ut exercitation irure esse. Veniam ad pariatur quis sit eiusmod enim laboris pariatur culpa Lorem exercitation aute est dolor."
  },
  {
    "id": "5fc6687e5600933cfa2c48f6",
    "name": "culpa",
    "description": "Adipisicing quis ut amet ipsum cupidatat cillum consectetur mollit laboris labore dolore id. Sit dolor laborum veniam in occaecat. Deserunt id cupidatat aliqua est. Eu nostrud magna quis labore fugiat."
  },
  {
    "id": "5fc6687e67a96d172030669c",
    "name": "reprehenderit",
    "description": "Ullamco aute nisi sint est duis mollit aute exercitation adipisicing reprehenderit mollit tempor. Pariatur magna nulla est do est ex commodo tempor laboris nulla esse id quis quis. Enim minim enim elit duis do amet laborum reprehenderit qui Lorem. Et ex fugiat cillum laboris cupidatat enim. Tempor qui cupidatat enim do adipisicing eu incididunt nulla non irure."
  },
  {
    "id": "5fc6687ea03636c300b9d73b",
    "name": "fugiat",
    "description": "Culpa ipsum consequat consectetur fugiat duis excepteur mollit magna velit non sit dolore. Enim culpa qui adipisicing consectetur tempor. Excepteur aute nisi irure qui nostrud occaecat aliquip elit Lorem do consequat. Consectetur laboris amet nostrud aliquip proident adipisicing. Ex tempor sint veniam ipsum laboris esse exercitation reprehenderit. Elit quis adipisicing nostrud consectetur cillum irure mollit dolore sit laborum voluptate occaecat do sint."
  },
  {
    "id": "5fc6687e91927651d5bb11ad",
    "name": "sint",
    "description": "Laborum consectetur qui magna nulla exercitation excepteur aute do nostrud cupidatat est excepteur. Laborum commodo laborum officia excepteur. Reprehenderit aute quis duis aute voluptate. Sunt ad aute esse ut labore mollit nostrud est ea qui culpa irure. Adipisicing officia culpa excepteur nisi quis. Aute tempor occaecat ea nostrud ullamco consectetur Lorem minim non non labore."
  },
  {
    "id": "5fc6687e06981c4625ebf53b",
    "name": "officia",
    "description": "Dolor ut excepteur nisi irure eiusmod. Est ad ex fugiat aliqua sit aliquip excepteur dolore sint et do adipisicing Lorem. Qui commodo excepteur sunt veniam incididunt pariatur occaecat reprehenderit officia sint veniam eiusmod non. Aliquip Lorem nisi nulla enim tempor occaecat minim qui Lorem sint amet quis ad pariatur. Dolore dolore adipisicing commodo qui laborum commodo. Occaecat culpa excepteur et qui exercitation."
  },
  {
    "id": "5fc6687e3096da2ddc7fe887",
    "name": "eiusmod",
    "description": "Reprehenderit consectetur do adipisicing culpa ea. Consequat cillum do ea proident pariatur et. Dolor incididunt eiusmod et ipsum mollit anim adipisicing est cupidatat. Sit magna in consectetur voluptate. Aliquip ut occaecat minim nisi eiusmod mollit est amet id elit. Consequat sit veniam nulla reprehenderit. Irure minim cillum id consectetur officia consectetur sit amet magna proident minim sunt Lorem."
  },
  {
    "id": "5fc6687ecf6b30f9d830c15b",
    "name": "consectetur",
    "description": "Veniam labore laboris aliquip et sint sunt irure amet. Minim exercitation consequat magna ad deserunt aute reprehenderit velit. Occaecat reprehenderit veniam incididunt ea velit do labore culpa. Excepteur exercitation mollit tempor aute tempor irure sunt in magna commodo consequat tempor. Veniam deserunt culpa in incididunt nulla commodo enim anim elit amet magna reprehenderit aute magna. Proident aute commodo cillum quis excepteur pariatur aliqua elit nulla."
  },
  {
    "id": "5fc6687ed2a1f157b85085b3",
    "name": "deserunt",
    "description": "Elit occaecat aute reprehenderit consequat culpa. Cillum minim non labore aliquip id velit pariatur esse exercitation. Consequat magna ea fugiat mollit. Irure excepteur consequat in irure ea ullamco incididunt."
  },
  {
    "id": "5fc6687e448d9f2d23902576",
    "name": "culpa",
    "description": "Est aliqua laboris incididunt nostrud pariatur ipsum irure magna. Ea qui occaecat Lorem magna sint velit. Magna sint voluptate sunt aute esse. Duis cillum qui sunt irure aliqua qui reprehenderit adipisicing incididunt amet nisi excepteur est magna."
  },
  {
    "id": "5fc6687e04d62d301f2c04d0",
    "name": "ipsum",
    "description": "Officia commodo sint tempor elit excepteur est dolor ad culpa ullamco aliquip laboris dolor. Officia magna aliqua culpa do labore. Culpa consectetur do excepteur pariatur consectetur enim sint elit qui est."
  },
  {
    "id": "5fc6687e36235b9a336f78d2",
    "name": "pariatur",
    "description": "Cillum ad officia exercitation cillum dolore non veniam nisi id. Exercitation et do sunt anim ipsum pariatur adipisicing esse laborum aute sunt eu. Tempor irure anim nisi Lorem dolor ut irure id magna. Pariatur minim qui nisi quis fugiat."
  },
  {
    "id": "5fc6687ef3c7497ce70dc790",
    "name": "anim",
    "description": "Labore excepteur anim magna veniam non cupidatat voluptate eu ipsum. Labore laborum ex non est non amet officia. Irure in sunt dolore aute deserunt ipsum. Quis cillum laborum ut est. Tempor id sunt excepteur nisi deserunt fugiat ex in."
  },
  {
    "id": "5fc6687e03102a99828768e5",
    "name": "sunt",
    "description": "Cupidatat veniam Lorem Lorem et proident ex veniam labore. Cupidatat ullamco culpa pariatur cupidatat in commodo culpa ex minim ut. Aliquip ea consectetur consequat laborum veniam. Ad aliquip aute reprehenderit deserunt do nostrud et."
  },
  {
    "id": "5fc6687e844fa300a5fe30e0",
    "name": "voluptate",
    "description": "Irure dolore duis commodo cupidatat aliquip sunt nisi nostrud pariatur. In nulla ut sunt elit fugiat non proident aliqua excepteur. Irure consequat officia elit aliqua esse exercitation occaecat sint. Dolor sunt ullamco fugiat irure eu aute ullamco magna ea."
  },
  {
    "id": "5fc6687ecbb859bbbe82a71f",
    "name": "sit",
    "description": "Mollit officia magna consectetur dolore ea. Reprehenderit labore labore ad non aliquip voluptate ex cupidatat consequat esse eu exercitation. Esse nisi dolor nulla mollit. Nisi ullamco ullamco nulla mollit voluptate occaecat consequat. Sunt do dolor irure in sint non veniam do id."
  },
  {
    "id": "5fc6687e4f7b63b31efa19e4",
    "name": "qui",
    "description": "Qui magna ullamco exercitation consectetur culpa aute voluptate aliquip reprehenderit non sunt sit qui sunt. Tempor exercitation deserunt occaecat mollit ex elit incididunt nostrud nostrud elit adipisicing. Cupidatat et deserunt elit aute eu. Quis veniam nulla veniam cupidatat adipisicing minim exercitation anim excepteur do ut ex. Consectetur id mollit consectetur amet consequat occaecat Lorem consectetur aliqua. Ex ipsum minim commodo in ipsum."
  },
  {
    "id": "5fc6687ed192ea00f4ce0fe8",
    "name": "do",
    "description": "Irure cillum pariatur magna commodo dolore aliqua anim. Amet esse magna labore pariatur est occaecat nulla mollit aliqua ullamco occaecat. Dolore Lorem reprehenderit Lorem ut elit laborum enim proident occaecat ea nostrud cupidatat in ipsum. Tempor quis commodo velit non incididunt velit voluptate. Nostrud cillum nulla non non occaecat. Minim ad occaecat proident fugiat minim culpa laborum. Laboris cillum deserunt est aliquip do incididunt anim ex pariatur."
  },
  {
    "id": "5fc6687e3e1f330bab5c21f2",
    "name": "quis",
    "description": "Fugiat incididunt elit ut non cupidatat nostrud duis deserunt ut laboris. Laborum Lorem tempor anim velit irure ut occaecat anim. Commodo enim pariatur velit magna enim reprehenderit eiusmod in ipsum cillum occaecat commodo. Qui deserunt cupidatat deserunt dolor exercitation. Ut proident magna tempor culpa consequat. Ea sit non enim eiusmod proident minim consequat ad duis dolor eu."
  },
  {
    "id": "5fc6687e2579180015444f66",
    "name": "ullamco",
    "description": "Ex aliqua laboris amet do occaecat laboris ea ad aliquip id exercitation ut. Qui voluptate labore ut nisi eu et velit pariatur aute. In proident qui excepteur occaecat sit eu et dolor incididunt exercitation sit occaecat sint occaecat. Dolor aliqua laborum est magna non consectetur sunt elit proident consequat ipsum. Aliquip labore reprehenderit sit pariatur duis in est occaecat ut. Dolore eiusmod proident ea nostrud Lorem. Aliqua anim magna sint aute est aute cillum ex mollit quis labore."
  },
  {
    "id": "5fc6687e03f6716e09ad37cf",
    "name": "cillum",
    "description": "Nulla officia ex velit consectetur enim amet reprehenderit laboris incididunt quis ut. Est incididunt esse irure aliqua qui excepteur reprehenderit in ad elit. Et consectetur Lorem Lorem magna adipisicing velit esse cupidatat minim commodo deserunt id minim. Anim adipisicing dolor eu nulla consequat officia aliquip commodo ex. Et reprehenderit ea cupidatat Lorem officia qui ad voluptate aute laboris do sint."
  },
  {
    "id": "5fc6687ed85eeeb870e08ced",
    "name": "cillum",
    "description": "In consequat sunt commodo sit culpa nostrud cillum pariatur irure culpa aliqua veniam cillum et. Velit et minim pariatur consequat anim excepteur elit sunt dolor. Ex esse incididunt esse occaecat Lorem. Quis Lorem Lorem eiusmod nulla. Duis cillum commodo id exercitation. Adipisicing minim Lorem ullamco velit irure Lorem consectetur nisi nisi. Ex cillum dolor minim dolor nulla Lorem cupidatat elit velit cupidatat nostrud pariatur."
  }
]`);
