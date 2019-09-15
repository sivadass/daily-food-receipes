const recipes = [
  {
    title: "Ragi Koozh",
    ingredients: ["Raw Rice / Millet - 1 cup", "Ragi Floor - 2 cups"],
    preparation: [
      "Mix ragi flour with 4 cups of water and whisk it well without any lumps. Set aside.",
      "Take raw rice in a mixer, grind it to a coarse mixture like Rava.",
      "In a vessel, boil 2.5 cups of water, add rice and cook it until soft to a porridge like consistency.",
      "Then add the mixed ragi flour mixture and required salt.",
      "In low flame , keep mixing and cook it till it becomes thick and raw taste of ragi flour leaves. It will become shiny and thick. At this stage switch off and spread it in a wide mouth container and let it cool down completely.",
      "Koozh will be ready to be served in the next morning."
    ]
  },
  {
    title: "Vegetable Salad",
    ingredients: [
      "Cucumber - 1/3 part of a bigger one",
      "Carrot - 1",
      "Cabbage - As needed",
      "Brocoli - Small Piece",
      "Mushroom - 5 pieces"
    ],
    preparation: [
      "Just cut all vegetables in medium size",
      "Boil the Brocoli or Mushroom",
      "Add some Pepper and few drops of Lemon Juice and mix them well"
    ]
  }
];

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    recipes: recipes
  }
});
