import database from "infra/database.js";

const updateAt = new Date().toISOString();

async function status(request, response) {
  await database.query("select 1+1 as soma");

  const versaoBdResult = await database.query("SHOW server_version");
  const versaoBd = versaoBdResult.rows[0].server_version;

  const maxConexaoResult = await database.query("SHOW max_connections;");
  const maxConexao = parseInt(maxConexaoResult.rows[0].max_connections);
 
  const dataBaseName= process.env.POSTGRES_DB;
  const activeConectResult = await database.query({
    text:"select count(*)::int from pg_stat_activity where datname=$1;",
    values:[dataBaseName],
  }
  );
const activeConectResultValue = activeConectResult.rows[0].count;

  

  
  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: versaoBd,
        maxima_conexao: maxConexao,
        conexao_ativas: activeConectResultValue,
      },
    },
  });
}

export default status;