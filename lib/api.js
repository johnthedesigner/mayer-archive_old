async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getEnvelopes() {
  const data = await fetchAPI(`query Envelopes {
    envelopes {
      envelope_id
      envelope_notes
      date_developed
    }
  }`)
  return data.envelopes
}
