package edu.unimagdalena.springacademic.services;

import edu.unimagdalena.springacademic.entities.Usuario;

/**
 * IUsuarioService
 */
public interface IUsuarioService {

  Usuario crearProfesor(String usuario);

  Usuario guardarUsuario(Usuario usuario);

  void eliminarUsuario(Usuario usuario);

  Usuario getCurrentUsuario();

  Usuario getUsuarioByNombre(String usuario);
}