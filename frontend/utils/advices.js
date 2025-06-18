import {router} from '@inertiajs/react'

export const saveAdvice = async (setSaved, saved, id) => {

  setSaved(saved)

  const query = await fetch(`/conseils/${id}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    },
    body: JSON.stringify({ save: saved }),
  })


  if (!query.ok) {
    setSaved(!saved)
  }

  const reloadedData = ['user', 'steps']

  if (!saved) {
    reloadedData.push('advices')
  }

  router.reload({ only: reloadedData })
}

export const checkAdvice = async (setChecked, checked, id) => {
  setChecked(checked)

  const query = await fetch(`/conseils/${id}/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    },
    body: JSON.stringify({ check: checked }),
  })

  if (!query.ok) {
    setChecked(!checked)
  }

  router.reload({ only: ['user', 'steps'] })
}
