
/**
 * Base interface for custom typeorm repository used for cast model to entity,
 * avoiding to expose the database entity to external api.
 * 
 * @param M - Object model edited from the frontend service.
 * @param E - Database entity persisted.
 * @abstract
 * @interface
 */
export interface AbstractRepository <M, E> {

    /**
     * Create and persist new db entity.
     * 
     * @param model input model to be converted into entity.
     * @throws Error - if input are not valid or db persist gone wrong.
     * @async
     * @returns saved entity.
     */
    createAndSave(model: M): Promise<E> | Promise<Error>;

    /**
     * Update and persist existing db entity.
     * 
     * @param model input model to be converted into entity
     * @throws Error - if input are not valid or db persist gone wrong.
     * @async
     * @returns saved entity.
     */
    updateAndSave(model: M): Promise<E> | Promise<Error>;

    /**
     * Get entity by id;
     * 
     * @param id entityId
     * @throws Error - if input are not valid or db persist gone wrong.
     * @async
     * @returns founded entity.
     */
    readById(id: number): Promise<E> | Promise<Error>;

    /**
     * Delete db row by entity id.
     * 
     * @param id entityId
     * @throws Error - if input are not valid or db persist gone wrong.
     * @async
     * @returns true if the row has been deleted without any error, else return false.
     */
    deleteById(id: number): Promise<boolean> | Promise<Error>;
}