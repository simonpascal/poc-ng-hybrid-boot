/**
 *
 */
package org.simon.pascal.utest.repository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.simon.pascal.config.SwaggerConfig;
import org.simon.pascal.entities.Developpeur;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author simon.pascal.ngos
 *
 */
@RunWith(SpringRunner.class)
@DataJpaTest
@ImportAutoConfiguration(exclude= {SwaggerConfig.class})
@ActiveProfiles("test")
public class DeveloppeurRepositoryTest {
	private final Logger log=LoggerFactory.getLogger(getClass());
	@Autowired
    private TestEntityManager em;

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	@Transactional
	public void setUp() throws Exception {

		log.info("setup Developpeur Test");
		final Developpeur membre=new Developpeur();
		membre.setCreatedBy("Test");
		membre.setEmail("test@localhost");
		membre.setFirstName("Simon");
		membre.setLastModifiedBy("Test");
		membre.setLastName("Pascal");
		em.persistAndFlush(membre);

	}

	@Test
	public void testdefault() {

	}


}
