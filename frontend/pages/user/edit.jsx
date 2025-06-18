import { Head, useForm } from "@inertiajs/react";


export default function Edit({user}) {
  const form = useForm({
    name: user.name || '',
    email: user.email || ''
  });

  const submitForm = (e) => {
    e.preventDefault();
    form.put('/mon-compte');
  };

  return (
    <>
      <Head title="Mon compte" />
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" onChange={e => form.setData('name', e.target.value)} value={form.data.name} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={e => form.setData('email', e.target.value)} value={form.data.email} />
        </div>

        <input type="file" id="avatar" name="avatar" onChange={e => form.setData('avatar', e.target.files[0])} />
        <button type="submit">Mettre à jour</button>
      </form>
    </>
  )
}
