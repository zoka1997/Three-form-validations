import React from 'react';

function Form({
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values
}) {

return (
     <div className="group-together">
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="form-group">
        <div className="form-outline mb-4">
        <label className="form-label" for="form1Example1">First Name</label>
             <input type="text" 
                    id="first-name-inout" 
                    className="form-control"
                    placeholder="Enter first name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstName"
                    required 
                    /> 
                    <span className="span-text">{touched.firstName && errors.firstName}</span>
        </div>
        </div>

        <div className="form-group">
        <div className="form-outline mb-4">
        <label className="form-label" for="form1Example2">Last Names</label>
             <input type="text" 
                    id="last-name-input" 
                    className="form-control"
                    placeholder="Enter last name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastName"
                    required 
                    /> 
                    <span className="span-text">{touched.lastName && errors.lastName}</span>
        </div>
        </div>

        <div className="form-group">
        <div className="form-outline mb-4">
        <label className="form-label" for="form1Example3">Email Adress</label>
             <input type="text" 
                    id="email" 
                    className="form-control"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    required 
                    /> 
                    <span className="span-text">{touched.email && errors.email}</span>
        </div>
        </div>

        <div className="form-group">
        <div className="form-outline mb-4">
        <label className="form-label" for="form1Example4">Email Adress</label>
             <input type="text" 
                    id="age" 
                    className="form-control"
                    placeholder="Enter age"
                    value={values.age || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="age"
                    min="0"
                    required 
                    /> 
                    <span className="span-text">{touched.age && errors.age}</span>
        </div>
        </div>

        <div className="form-group">
        <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
    </form>
    </div>
   );
}

export default Form;