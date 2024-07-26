import Head from 'next/head';

export default function Recipe({ recipe }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.name,
    "description": recipe.description,
    "image": recipe.image,
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.steps,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "10"
    }
  };

  return (
    <div className="p-4">
      <Head>
        <title>{recipe.name}</title>
        <meta name="description" content={recipe.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      {/* Recipe details here */}
    </div>
  );
}
