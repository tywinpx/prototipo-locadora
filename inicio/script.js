var listaCarros = ['https://fotos.jornaldocarro.estadao.com.br/uploads/2018/12/12155721/43797884-1160x773.jpg','https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg', 'https://blog.nakata.com.br/wp-content/uploads/2020/08/post_thumbnail-1f77e8996174df4fb19587977331de22-780x450.jpg', 'https://s2.glbimg.com/_aFG5C8Bz2XOBgYLSKTiX-UkQxw=/0x0:6554x4374/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/h/8/nZPJR2RaCZsNNtkUuZbA/novo-onix-premier-15-.jpg', 'https://img.olhardigital.com.br/wp-content/uploads/2021/03/Fiat-Strada-960x450.jpg', 'https://novovarejo.com.br/wp-content/uploads/2020/05/gol-vw-1170x694.jpg', 'https://fipecarros.oportaln10.com.br/wp-content/uploads/2015/09/novo-vw-gol-g7-2016-620x384.jpg', 'https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/04/19190028/ford_evos-768x480.jpeg', 'https://blog.nakata.com.br/wp-content/uploads/2020/01/original-80da0b6c2712b5feb08091be157d7bc8-780x450.jpg', 'https://www.autoo.com.br/fotos/2020/4/960_720/chevrolet_tracker_2021_1_26042020_30613_960_720.jpg', 'https://cdn.autopapo.com.br/box/uploads/2018/09/27175353/renault-kwid-life.jpg', 'https://pemavel.com.br/wp-content/uploads/2020/02/volkswagen_virtus_tsi_highline_24-1024x577.jpg', 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/12/12155721/43797884-1160x773.jpg','https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg', 'https://blog.nakata.com.br/wp-content/uploads/2020/08/post_thumbnail-1f77e8996174df4fb19587977331de22-780x450.jpg', 'https://s2.glbimg.com/_aFG5C8Bz2XOBgYLSKTiX-UkQxw=/0x0:6554x4374/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/h/8/nZPJR2RaCZsNNtkUuZbA/novo-onix-premier-15-.jpg', 'https://img.olhardigital.com.br/wp-content/uploads/2021/03/Fiat-Strada-960x450.jpg', 'https://novovarejo.com.br/wp-content/uploads/2020/05/gol-vw-1170x694.jpg', 'https://fipecarros.oportaln10.com.br/wp-content/uploads/2015/09/novo-vw-gol-g7-2016-620x384.jpg', 'https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/04/19190028/ford_evos-768x480.jpeg', 'https://blog.nakata.com.br/wp-content/uploads/2020/01/original-80da0b6c2712b5feb08091be157d7bc8-780x450.jpg', 'https://www.autoo.com.br/fotos/2020/4/960_720/chevrolet_tracker_2021_1_26042020_30613_960_720.jpg', 'https://cdn.autopapo.com.br/box/uploads/2018/09/27175353/renault-kwid-life.jpg', 'https://pemavel.com.br/wp-content/uploads/2020/02/volkswagen_virtus_tsi_highline_24-1024x577.jpg', 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/12/12155721/43797884-1160x773.jpg','https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg', 'https://blog.nakata.com.br/wp-content/uploads/2020/08/post_thumbnail-1f77e8996174df4fb19587977331de22-780x450.jpg', 'https://s2.glbimg.com/_aFG5C8Bz2XOBgYLSKTiX-UkQxw=/0x0:6554x4374/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/h/8/nZPJR2RaCZsNNtkUuZbA/novo-onix-premier-15-.jpg', 'https://img.olhardigital.com.br/wp-content/uploads/2021/03/Fiat-Strada-960x450.jpg', 'https://novovarejo.com.br/wp-content/uploads/2020/05/gol-vw-1170x694.jpg', 'https://fipecarros.oportaln10.com.br/wp-content/uploads/2015/09/novo-vw-gol-g7-2016-620x384.jpg', 'https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/04/19190028/ford_evos-768x480.jpeg', 'https://blog.nakata.com.br/wp-content/uploads/2020/01/original-80da0b6c2712b5feb08091be157d7bc8-780x450.jpg', 'https://www.autoo.com.br/fotos/2020/4/960_720/chevrolet_tracker_2021_1_26042020_30613_960_720.jpg', 'https://cdn.autopapo.com.br/box/uploads/2018/09/27175353/renault-kwid-life.jpg', 'https://pemavel.com.br/wp-content/uploads/2020/02/volkswagen_virtus_tsi_highline_24-1024x577.jpg', 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/12/12155721/43797884-1160x773.jpg','https://s2.glbimg.com/mYgwlPa7vtIiUk6kROUxJUi2yyo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/a/4/Ik8J1fQYirf6wYRvRJ8Q/2020-03-20-novo-tracker-1.jpg', 'https://blog.nakata.com.br/wp-content/uploads/2020/08/post_thumbnail-1f77e8996174df4fb19587977331de22-780x450.jpg', 'https://s2.glbimg.com/_aFG5C8Bz2XOBgYLSKTiX-UkQxw=/0x0:6554x4374/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/h/8/nZPJR2RaCZsNNtkUuZbA/novo-onix-premier-15-.jpg', 'https://img.olhardigital.com.br/wp-content/uploads/2021/03/Fiat-Strada-960x450.jpg', 'https://novovarejo.com.br/wp-content/uploads/2020/05/gol-vw-1170x694.jpg', 'https://fipecarros.oportaln10.com.br/wp-content/uploads/2015/09/novo-vw-gol-g7-2016-620x384.jpg', 'https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/04/19190028/ford_evos-768x480.jpeg', 'https://blog.nakata.com.br/wp-content/uploads/2020/01/original-80da0b6c2712b5feb08091be157d7bc8-780x450.jpg', 'https://www.autoo.com.br/fotos/2020/4/960_720/chevrolet_tracker_2021_1_26042020_30613_960_720.jpg', 'https://cdn.autopapo.com.br/box/uploads/2018/09/27175353/renault-kwid-life.jpg', 'https://pemavel.com.br/wp-content/uploads/2020/02/volkswagen_virtus_tsi_highline_24-1024x577.jpg']


function selecionar(){
  var data = document.getElementById("data").value
  if (data === ""){
    alert("Escolha uma data!")
  } else {
    for (var i = 0; i < listaCarros.length; i++){
      var mostrarCarros = document.querySelector('#listaCarros')
      var elementoCarro = ("<img src=" + listaCarros[i] + " width='320' height='205'>")
      mostrarCarros.innerHTML = mostrarCarros.innerHTML + elementoCarro
    } 
  }
}
//esta página foi criada apena para ilustrar o projeto