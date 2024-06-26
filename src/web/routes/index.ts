import DefaultRoute from "@web/route";

export default class IndexRoute extends DefaultRoute
{
    public readonly Method: string = "GET";
    public readonly Path: string = "/";

    public Serve(request: any, response: any): void
    {
        response.render("index");
    }
}