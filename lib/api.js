async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getEnvelopes() {
  const data = await fetchAPI(`query Envelopes {
    envelopes {
      envelope_id
      envelope_notes
      date_developed
      digitized
      images {
        image_id
        caption_on_envelope
      }
    }
  }`);
  return data.envelopes;
}

export async function getDigitizedEnvelopes() {
  const data = await fetchAPI(`query Envelopes {
    envelopes( where: { digitized: true } ) {
      envelope_id
      envelope_notes
      date_developed
      digitized
      images {
        image_id
        caption_on_envelope
      }
      recorded
      confirmed_missing
    }
  }`);
  return data.envelopes;
}

export async function getEnvelope(envelope_id) {
  const data = await fetchAPI(
    `query {
      envelopes( where: { envelope_id: "${envelope_id}" } ) {
        envelope_id
        envelope_notes
        date_developed
        images {
          image_id
          caption_on_envelope
        }
      }
    }`,
    { variables: { envelope_id } }
  );
  return data.envelopes[0];
}

export async function getImages() {
  const data = await fetchAPI(`query Images {
    images( where: { recorded: true } ) {
      image_id
      caption_on_envelope
      envelope {
        envelope_id
        envelope_notes
        date_developed
      }
    }
  }`);
  return data.images;
}

export async function getImage(image_id) {
  const data = await fetchAPI(
    `query {
      images( where: { image_id: "${image_id}" } ) {
        image_id
        caption_on_envelope
        envelope {
          envelope_id
          envelope_notes
          date_developed
        }
      }
    }`,
    { variables: { image_id } }
  );
  return data.images[0];
}

export async function getCollections() {
  const data = await fetchAPI(`query Collections {
    collections {
      slug
      title
      description
      images {
        image_id
        envelope {
          envelope_id
          date_developed
        }
      }
    }
  }`);
  return data.collections;
}

export async function getCollection(collection_slug) {
  const data = await fetchAPI(
    `query {
      collections( where: { slug: "${collection_slug}" } ) {
        slug
        title
        description
        images {
          image_id
          envelope {
            envelope_id
            date_developed
          }
        }
      }
    }`,
    { variables: { collection_slug } }
  );
  return data.collections[0];
}
